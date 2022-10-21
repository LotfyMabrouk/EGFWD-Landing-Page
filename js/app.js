/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let i = 1
let sectionArr = [...document.querySelectorAll("section")];
let btnRemove = document.getElementById('btn1')
let btnAdd = document.getElementById('btn2')
let main = document.querySelector('main')
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
const nav = document.getElementById("navbar__list")
const lorem2 = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
const lorem1 =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."






/**
 * End Global Variables
 * 
*/

//Construct buttons to add or remove sections
for(section of sectionArr){
    createNavItem(section)
    i++
}

btnAdd.addEventListener('click' , function(){
    let sec = document.createElement("section")
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const contain = document.createElement('div')
    contain.classList.add("landing__container")
    contain.appendChild(document.createElement('h2'))
    contain.querySelector('h2').textContent = "Section " + i;
    p1.textContent = lorem1
    p2.textContent = lorem2
    contain.appendChild(p1)
    contain.appendChild(p2)
    sec.id = "section" + i;
    sec.appendChild(contain)
    sec.dataset.nav = "Section " + i;
    i++;
    createNavItem(sec)
    console.log(sec)
    sectionArr.push(sec)
    main.appendChild(sec)
    //console.log(sectionArr)
})
btnRemove.addEventListener('click' , function(){
    main.removeChild(sectionArr[i-2])
    sectionArr.pop()
    nav.removeChild(nav.lastElementChild)
    i--;
    //console.log(sectionArr)
})


// build the nav
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click

function createNavItem(section){
    const listItem = document.createElement("li")
    let anchor = document.createElement("a")
    anchor.href = "#"+ section.id
    anchor.textContent = section.dataset.nav
    //console.log(section.dataset.nav)
    anchor.classList.add('menu__link');
    //Smooth scrolling functionallity 
    anchor.addEventListener('click' , function(e){
        e.preventDefault()
        if(e.target == anchor){
            const h = e.target.getAttribute('href').slice(1)
            console.log(document.getElementById(h))
            document.getElementById(h).scrollIntoView({ behavior: 'smooth' });
            
            
        }

    })
    listItem.appendChild(anchor)
    nav.appendChild(listItem);
}


// Add class 'active' to section when near top of viewport
// Set sections as active
window.addEventListener('scroll' , function(){
    for(section of sectionArr){
        const rect = section.getBoundingClientRect();
        const inView = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        if(inView)
            {
                for(sections of sectionArr){
                    sections.classList.remove('your-active-class')
                }
                section.classList.add('your-active-class')
    
            }
    }
    
})






