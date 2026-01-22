import Link from 'next/link';

export default function Footer(){
    return (
        <footer className="text-stone-700">
            
                <div className="my-container py-8 bg-stone-50 border-t border-t-stone-200 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">MyApp</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://www.instagram.com/" className="text-stone-600 hover:text-stone-700 transition-colors">Instagram</Link></li>
                            <li><Link href="https://twitter.com/" className="text-stone-600 hover:text-stone-700 transition-colors">Twitter</Link></li>
                            <li><Link href="https://www.facebook.com/" className="text-stone-600 hover:text-stone-700 transition-colors">Facebook</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-stone-600 hover:text-stone-700 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-stone-600 hover:text-stone-700 transition-colors">About</Link></li>
                            <li><Link href="/services" className="text-stone-600 hover:text-stone-700 transition-colors">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-stone-600 hover:text-stone-700 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-stone-600 hover:text-stone-700 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-stone-600 hover:text-stone-700 transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-stone-700 transition-colors">GitHub</a></li>
                            <li><a href="#" className="text-stone-600 hover:text-stone-700 transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="my-container py-5 bg-stone-300 text-center text-stone-600">
                    <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                </div>
            
        </footer>
    );
}
