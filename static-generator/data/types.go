package data

type Project struct {
	Title        string
	GitLink      string
	LiveLink     string
	Description  string
	ImageSrc     string
	Technologies []string
}

type Skill struct {
	Name string
	Img  string
}

type Link struct {
	Label string
	Link  string
}
