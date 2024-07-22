import { computed, unref } from 'vue'
import { useData } from 'vitepress'
import { joinUrl } from '../utils'

import type { PageData } from 'vitepress'

type EnhanceArrayElement<T, P> = T extends Array<infer U> ? (U & P)[] : never

type Headers = EnhanceArrayElement<
  PageData['headers'],
  {
    children?: Headers
  }
>

export const useToc = () => {
  const { page } = useData()

  return computed(() => resolveHeaders(page.value.headers))
}

export const resolveLink = (base: string, path: string) => {
  if (path === undefined) {
    return path
  }
  // keep relative hash to the same page
  if (path.startsWith('#')) {
    return path
  }
  return joinUrl(base, path)
}

export const resolveHeaders = (headers: PageData['headers']) => {
  if (!headers) return;

  return mapHeaders(groupHeaders(headers))
}

export function groupHeaders(headers: PageData['headers']) {
  headers = headers.map((h) => Object.assign({}, h))
  let lastH2

  headers.forEach((h) => {
    if (h.level === 3) {
      lastH2 = h
    } else if (lastH2) {
      ;(lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter((h) => h.level === 3)
}

export function mapHeaders(headers: Headers) {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : undefined,
  }))
}


const resolvedHeaders: any[] = [];
export function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll('.content :where(h1,h2,h3,h4,h5,h6)')
  ]
    .filter((el) => el.id && el.hasChildNodes())
    .map((el) => {
      const level = Number(el.tagName[1]);
      const text = serializeHeader(el)
      return {
        element: el,
        title: text,
        link: '#' + el.id,
        level,
        text // 兼容
      };
    });
    // debugger;
  return resolveHeaders1(headers, range);
}
function serializeHeader(h) {
  let ret = '';
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (
        node.classList.contains('VPBadge') ||
        node.classList.contains('header-anchor') ||
        node.classList.contains('ignore-header')
      ) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
export function resolveHeaders1(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange =
    (typeof range === 'object' && !Array.isArray(range)
      ? range.level
      : range) || 2;
  const [high, low] =
    typeof levelsRange === 'number'
      ? [levelsRange, levelsRange]
      : levelsRange === 'deep'
      ? [2, 6]
      : levelsRange;
  headers = headers.filter((h) => h.level >= high && h.level <= low);
  // clear previous caches
  resolvedHeaders.length = 0;
  // update global header list for active link rendering
  for (const { element, link } of headers) {
    resolvedHeaders.push({ element, link });
  }
  const ret: any[] = [];
  outer: for (let i = 0; i < headers.length; i++) {
    const cur = headers[i];
    if (i === 0) {
      ret.push(cur);
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = headers[j];
        if (prev.level < cur.level) {
          (prev.children || (prev.children = [])).push(cur);
          continue outer;
        }
      }
      ret.push(cur);
    }
  }
  return ret;
}
