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
