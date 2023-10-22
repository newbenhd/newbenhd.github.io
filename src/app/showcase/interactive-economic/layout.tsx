import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode; }) {
  return <div>{children}
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js" />
  </div>
}
