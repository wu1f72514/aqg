const module_name = 'Engine_binder'
const bindedById = {}
const bind = {
    byId(node_id, key){
        // controle: id doit exister dans le dom
        if(document.getElementById(node_id) === null){
            console.error(module_name+": L'élément ciblé par l'id `"+node_id+"` n'existe pas")
            return false
        }
        // controle: la clé doit exister dans datas
        if(!this._ctrl_key(key)){
            console.error(module_name+": La clé indiquée '" + key + "' n'existe pas dans datas")
            return false
        }
        bindedById[key] = node_id
    },
    _ctrl_key(key){
        let w = key.split('.')
        let p = datas
        let r = true
        w.forEach(element => {
            if(!(element in p)) {
                return false
            }
            p = p[element]
        })
        return true
    },
    _set_key(key, value){
        let w = key.split('.')
        let p = 'datas'
        w.forEach(element => {
            p += '.'+element
        })
        eval(p+' = '+value)
        return true
    },
    _get_key(key){
        let w = key.split('.')
        let p = 'datas'
        w.forEach(element => {
            p += '.'+element
        })
        return eval(p)
    },
    list(){
        return bindedById
    },
    set(mode, key, value){
        // controle: la clé doit exister dans datas
        if(!this._ctrl_key(key)){
            console.error(module_name+": La clé indiquée '" + key + "' n'existe pas dans datas")
            return false
        }
        // set valeur
        this._set_key(key, value)

        // changement affichage
        if(mode === 'id'){
            dom.set(bindedById[key], value)
        }
    },
    get(key){
        // controle: la clé doit exister dans datas
        if(!this._ctrl_key(key)){
            console.error(module_name+": La clé indiquée '" + key + "' n'existe pas dans datas")
            return false
        }
        return this._get_key(key)
    },
}