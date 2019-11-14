const Footer = () => (
    <footer className="w-full bg-white px-6 border-t">
		<div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
			©2019 Teofilus Candra. Built with NextJS and Tailwind CSS.
			<div className="flex justify-start items-center text-gray-500">
				<a className="block flex items-center hover:text-gray-700 mr-5" href={process.env.URL_GITHUB} target="_blank">
					<img src="/static/icons/github.svg" />
				</a>
				<a className="block flex items-center hover:text-gray-700 mr-5" href={process.env.URL_LINKEDIN} target="_blank">
					<img src="/static/icons/linkedin.svg" />
				</a>
				<a className="block flex items-center hover:text-gray-700 mr-5" href={process.env.URL_TWITTER} target="_blank">
					<img src="/static/icons/twitter.svg" />
				</a>
				<a className="block flex items-center hover:text-gray-700 mr-5" href={process.env.URL_FACEBOOK} target="_blank">
					<img src="/static/icons/facebook.svg" />
				</a>
				<a className="block flex items-center hover:text-gray-700 mr-5" href={process.env.URL_IG} target="_blank">
					<img src="/static/icons/instagram.svg" />
				</a>
			</div>
		</div>
	</footer>
)

export default Footer;