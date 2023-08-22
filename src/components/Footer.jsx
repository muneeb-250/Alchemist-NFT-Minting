function Footer() {
    return (
        <footer className="py-12 bg-purple-100">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-left">
                    <p className="text-2xl font-semibold"><span className="text-purple-500 font-black">Connect</span> to socials:</p>
                </div>
                <div className="text-right flex  gap-x-8">
                    <a href="https://twitter.com/0xmuneeb" target="blank" className="text-black hover:text-purple-500 mr-2">
                        <p>Twitter</p>
                    </a>
                    <a href="https://www.linkedin.com/in/muneeburrehman250/" target="blank" className="text-black hover:text-purple-500 mr-2">
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/muneeb-250" target="blank" className="text-black hover:text-purple-500">
                        <p>GitHub</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
