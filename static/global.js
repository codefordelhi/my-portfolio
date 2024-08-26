console.log("IT’S ALIVE!");

const ARE_WE_HOME = document.documentElement.classList.contains("home");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add("current");

let pages = [
	{url: ".", title: "Home"},
	{url: "projects", title: "Projects"},
];
let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
        let url = p.url;
        let title = p.title;
        let a = document.createElement("a");
        a.href = url;
        a.textContent = title;
        nav.append(a);
        if (a.host === location.host && a.pathname === location.pathname) {
            a.classList.add("current");
        }
        a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
}

document.body.insertAdjacentHTML
("afterbegin", `
	<label class="color-select">
		Theme:
		<select>
			<option value="light dark">Automatic</option>
            <option value="light">Light</optiom>
            <option value="dark">Dark</option>
		</select>
	</label>`
);

const select = document.querySelector("select")
select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
    localStorage.colorScheme = event.target.value;
    document.documentElement.style.setProperty("color-scheme", event.target.value);
});

if (localStorage.getItem("colorScheme")) {
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    const selectElement = document.getElementById("option");
    selectElement.value = localStorage.colorScheme;
  } else {
    document.documentElement.style.setProperty("color-scheme", "light dark");
  }