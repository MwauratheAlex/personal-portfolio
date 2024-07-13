package data

type NavLink struct {
    Label string
    Link string
}

var NavLinks = []NavLink{
    {Label: "Home", Link: "#home"},
    {Label: "About", Link: "#about"},
    {Label: "Projects", Link: "#projects"},
    {Label: "Contact", Link: "#contact"},
}

