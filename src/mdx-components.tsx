import type { MDXComponents } from 'mdx/types'


 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => <h1 className='text-5xl' >{children}</h1>,
    h2: ({children}) => <h2 className='text-2xl' >{children}</h2>,
    h3: ({children}) => <h3 className='text-sky-500 text-xl' >{children}</h3 >,

    ...components, 
  }
}