const dom = {
    set(id, val){
        document.getElementById(id).innerText = val
    },
    get(id){
        return document.getElementById(id).innerText
    },
    hide(id){
        document.getElementById(id).style.visibility = 'none'
    },
    show(id){
        document.getElementById(id).style.visibility = 'default'
    },
}