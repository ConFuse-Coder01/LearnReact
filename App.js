

    // const heading=React.createElement(
    //     "h1",
    //     {id:"heading"},
    //     "Hello World form React!");
    //     console.log(heading)
    // const root=ReactDOM.createRoot(document.getElementById("root"));
    // console.log(root)
    // root.render(heading)


    

    const nav=React.createElement("div",
        {
            id:"nav"
        },
        [React.createElement('div',{id:'logodiv'},React.createElement('h1',{id:"logo"},"CC"))
        ,React.createElement('div',{id:"menu"},
            [React.createElement('li',{class:'menu-item'},"Home"),
            React.createElement('li',{class:'menu-item'},"About"),React.createElement('li',{class:'menu-item'},"Contact"),
            ])
        // React.createElement('div',{id:"search"},React.createElement("input",{id:"search-box",placeholder:"Search"},""))
    ]
        

    )
    const root=ReactDOM.createRoot(document.getElementById("root"));
    console.log(root)
    root.render(nav)
