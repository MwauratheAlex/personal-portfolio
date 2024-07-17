package data

var NavLinks = []Link{
	{Label: "Home", Link: "#home"},
	{Label: "About", Link: "#about"},
	{Label: "Projects", Link: "#projects"},
	{Label: "Contact", Link: "#contact"},
}

var Skills = []Skill{
	{Name: "Docker", Img: "docker.svg"},
	{Name: "Css", Img: "css.svg"},
	{Name: "Arduino", Img: "arduino.svg"},
	{Name: "Git", Img: "git.svg"},
	{Name: "Golang", Img: "go.svg"},
	{Name: "html", Img: "html.svg"},
	{Name: "Js", Img: "js.svg"},
	{Name: "linux", Img: "linux.svg"},
	{Name: "Mongodb", Img: "mongo.svg"},
	{Name: "Node", Img: "node.svg"},
	{Name: "Postgres", Img: "postgres.svg"},
	{Name: "Python", Img: "python.svg"},
	{Name: "React", Img: "react.svg"},
	{Name: "Redis", Img: "redis.svg"},
	{Name: "Tailwind", Img: "tailwind.svg"},
}

var Projects = []Project{
	{
		Title:        "NFT Marketplace App",
		GitLink:      "https://github.com/MwauratheAlex/NFTMarketplace.git",
		LiveLink:     "https://nftmarketplaceshowcase.on.fleek.co/",
		Description:  "A modern cross-platform React Native Application with a Sleek and Modern UI. Users can see and search through listed NFTs and scroll through them. The beautiful NFT details page allows users to see more information about a specific NFT and see all it's active bids.",
		ImageSrc:     "nft-marketplace.webp",
		Technologies: []string{"ReactNative", "JavaScript"},
	},
	{
		Title:        "NFT Marketplace Showcase",
		GitLink:      "https://github.com/MwauratheAlex/NFTMarketplaceShowcase.git",
		LiveLink:     "https://nftmarketplaceshowcase.on.fleek.co/",
		Description:  "A landing page for the NFT Marketplace Application. All details about the app are shared in this smooth single page website, together with the download link as well as all the app features. The page is hosted on IPFS, a completely decentralized peer-to-peer protocol.",
		ImageSrc:     "nft-showcase.webp",
		Technologies: []string{"React", "JavaScript"},
	},
	{
		Title:        "Startup Landing Page",
		GitLink:      "https://github.com/MwauratheAlex/nextjs_landing_page.git",
		LiveLink:     "https://business-landing-page-mwaura.netlify.app/",
		Description:  "A fully functional, mobile responsive, beautiful, single page website built using Next Js. Using this landing page will surely drive more traffic to your startup.",
		ImageSrc:     "landing-page.webp",
		Technologies: []string{"NextJs", "JavaScript"},
	},
	{
		Title:        "GPT-3",
		GitLink:      "https://github.com/MwauratheAlex/gpt3.git",
		LiveLink:     "https://gpt-3-mwaura.netlify.app/",
		Description:  "A fully responsive GPT-3 website/landing page with modern UI/UX following a Figma design built with React.",
		ImageSrc:     "gpt-3.webp",
		Technologies: []string{"React", "JavaScript", "Figma"},
	},
	{
		Title:        "Just Gym It",
		GitLink:      "https://github.com/MwauratheAlex/gym_exercises.git",
		LiveLink:     "https://justgymit.netlify.app/",
		Description:  "A modern React 18 Fitness Exercises App with the functionality to choose exercise categories and specific muscle groups. Browse 1000+ exercises with practical examples.",
		ImageSrc:     "justgymit.webp",
		Technologies: []string{"React", "JavaScript", "Api"},
	},
	{
		Title:        "MovieLand",
		GitLink:      "https://github.com/MwauratheAlex/movieLand-react.git",
		LiveLink:     "https://movie-land-mwaura.netlify.app/",
		Description:  "A fully mobile-responsive React JS Application that displays movies and allows users to search for any movie on the internet.",
		ImageSrc:     "movie-land.webp",
		Technologies: []string{"React", "JavaScript"},
	},
}

var TechColors = map[string]string{
	"JavaScript":  "#f0db4f",
	"React":       "#61dafb",
	"Api":         "#e44d26",
	"Figma":       "#f24e1e",
	"NextJs":      "#000000",
	"ReactNative": "#00d8ff",
}
