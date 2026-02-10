import { projectData } from './data.js'

const originalHeroHTML = document.querySelector('.hero-section').innerHTML
const originalMainHTML = document.querySelector('main').innerHTML

document.addEventListener('click',(e)=>{
    if(e.target.id=== 'view-more'){
        getMoreProjects()
    }

    if(e.target.closest('.hero-section')){
        showHeroArticle()
    }

    if(e.target.id === 'recent-posts'){
        getInitialPage()
    }

    if(e.target.id === 'about'){
        getAboutPage()
    }

    if(e.target.id === 'home'){
        getInitialPage()
    }
})

function getAboutPage(){
     const main = document.querySelector('main')

    main.innerHTML = `
        <div class="about-page">
            <div class="bio">
                <img src="./images/avatar.png" alt="working on laptop while it's sunset outside the window">
                <div class="about-text">
                    <h1>Hi there! My name is Cary and welcome to my learning journal.</h1>
                    <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </div>
            </div>    
            <div class="about-article">
                <h3>How I stay committed to learning</h3>
                <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.<P>
                <h3>How I got started</h3>
                <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
            </div>
            <p id="recent-posts">Recent posts</p>
            <div class="blog-grid">${getProjects()}</div>
        </div>
    `
}

function getInitialPage(){
     document.querySelector('main').innerHTML = originalMainHTML
    render()
}

function showHeroArticle(){
    const main = document.querySelector('main')

    main.innerHTML = `
        <div class="hero-section-clicked">
            <div class="hero-text-clicked">
                <p>SEPTEMBER 10, 2025</p>
                <h1>My new journey as a web dev student.</h1>
                <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            </div>
            <img src="./images/article-image-hero.png" alt="working on laptop while it's sunset outside the window">
            <div class="hero-article">
                <h3>How I stay committed to learning</h3>
                <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.<P>
                <h3>How I got started</h3>
                <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
                <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
            </div>
            <p id="recent-posts">Recent posts</p>
            <div class="blog-grid">${getProjects()}</div>
        </div>
    `
}

function getMoreProjects(){
    const viewMoreBtn = document.getElementById('view-more')
    const hasHiddenProjects = projectData.some(project => project.isHidden === true)
    
    if(hasHiddenProjects){
        projectData.forEach(project => {
            project.isHidden = false
        })
        viewMoreBtn.textContent = 'View Less'
    } else {
        projectData.forEach((project, index) => {
            if(index >= 3){
                project.isHidden = true
            }
        })
        viewMoreBtn.textContent = 'View More'
    }
    
    render()
}


function getProjects(){
    let projectHTML =  ``

    projectData.forEach((project)=>{
        if(project.isHidden === false){

            projectHTML += `
                <article class="blog-card">
                            <img src="./${project.image}" alt="${project.name}">
                            <p class="blog-date">${project.date}</p>
                            <h3>${project.name}</h3>
                            <p>${project.description}</p>
                 </article>
            `
        }
    })
    return projectHTML
}

function render(){
         const blogGrid = document.querySelector('.blog-grid')
        if(blogGrid){
            blogGrid.innerHTML = getProjects()
        }
    }

render()