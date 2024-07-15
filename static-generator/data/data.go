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
