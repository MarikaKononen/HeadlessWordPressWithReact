import Link from 'next/link'

export default () => (
    <div id="div_top_hypers" className="w3-brown">
        <ul id="ul_top_hypers" className="w3-padding-16">
            <li ><Link  href="/"><a href="/">Home</a></Link></li>
            <li className="w3-padding-large"><Link href="/about-me"><a href="/about-me">About Me</a></Link></li>
            <li className="w3-padding-large"><Link href="/posts"><a href="/posts">Posts</a></Link></li>
            <li className="w3-padding-large"><Link href="/coding"><a href="/coding">Coding</a></Link></li>
            <li className="w3-padding-large"><Link href="/coding/wordpress"><a href="/coding/wordpress">WordPress</a></Link></li>
            <li className="w3-padding-large"><Link href="/coding/react"><a href="/coding/react">React</a></Link></li>
        </ul>
    </div>
    
)