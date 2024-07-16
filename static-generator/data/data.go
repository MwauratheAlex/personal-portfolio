package data

type Link struct {
	Label string
	Link  string
}

var NavLinks = []Link{
	{Label: "Home", Link: "#home"},
	{Label: "About", Link: "#about"},
	{Label: "Projects", Link: "#projects"},
	{Label: "Contact", Link: "#contact"},
}

type Skill struct {
	Name string
	Img  string
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

type Project struct {
	Title        string
	GitLink      string
	LiveLink     string
	Description  string
	ImageSrc     string
	Technologies string
}

var Projects = []Project{
	{
		Title:    "NFT Marketplace Showcase",
		GitLink:  "https://github.com/MwauratheAlex/NFTMarketplaceShowcase.git",
		LiveLink: "https://nftmarketplaceshowcase.on.fleek.co/",
		ImageSrc: "nft-showcase.webp",
	},
	{
		Title:    "NFT Marketplace App",
		GitLink:  "https://github.com/MwauratheAlex/NFTMarketplace.git",
		LiveLink: "https://nftmarketplaceshowcase.on.fleek.co/",
		ImageSrc: "nft-marketplace.webp",
	},
	{
		Title:    "Startup Landing Page",
		GitLink:  "https://github.com/MwauratheAlex/nextjs_landing_page.git",
		LiveLink: "https://business-landing-page-mwaura.netlify.app/",
		ImageSrc: "landing-page.webp",
	},
	{
		Title:    "GPT-3",
		GitLink:  "https://github.com/MwauratheAlex/gpt3.git",
		LiveLink: "https://gpt-3-mwaura.netlify.app/",
		ImageSrc: "gpt-3.webp",
	},
	{
		Title:    "Just Gym It",
		GitLink:  "https://github.com/MwauratheAlex/gym_exercises.git",
		LiveLink: "https://justgymit.netlify.app/",
		ImageSrc: "justgymit.webp",
	},
	{
		Title:    "MovieLand",
		GitLink:  "https://github.com/MwauratheAlex/movieLand-react.git",
		LiveLink: "https://movie-land-mwaura.netlify.app/",
		ImageSrc: "movie-land.webp",
	},
}
