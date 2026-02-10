export const initTheme = () =>{
    const btn = document.querySelector(".btn-theme-mode")
    const text = btn.querySelector(".txt-theme-mode");
    const icon = btn.querySelector("i");

    btn.addEventListener("click",(evt)=>{
        const isDark = document.body.classList.toggle("dark-mode");

        if (isDark){
            icon.classList.replace("fa-moon","fa-sun");
            text.textContent = "Light mode";
        }else{
            icon.classList.replace("fa-sun","fa-moon");
            text.textContent = "Dark mode";
        }

        localStorage.setItem("theme",isDark ? "dark":"light");
    })
}