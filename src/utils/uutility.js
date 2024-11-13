// import { toast } from "react-toastify"

import toast from "react-hot-toast"

const getAllCarts = () => {
    const all = localStorage.getItem("carts")

    if (all) {
        const carts = JSON.parse(all)
        return carts
    } else {
        return []
    }
}

const addCarts = (gadget) => {
    const carts = getAllCarts()
    const isExist = carts.find(item => item.product_id === gadget.product_id)
    if (isExist) { return toast.error("Gadget Already exists") }
    carts.push(gadget)
    localStorage.setItem('carts', JSON.stringify(carts))
    console.log(carts.length)
    toast.success("Successfully added")
}

const removeCart = (id) => {
    const carts = getAllCarts()
    const remaining = carts.filter(gadget => gadget.product_id != id)
    localStorage.setItem("carts", JSON.stringify(remaining))
    toast.success("Successfully Removed")
}

const removeCartAll = () => {
    const remain = []
    localStorage.setItem("carts", JSON.stringify(remain))
}

// Wishlists

const getAllWishes = () => {
    const all = localStorage.getItem("wish")

    if (all) {
        const wish = JSON.parse(all)
        return wish
    } else {
        return []
    }
}

const addWishes = (gadget) => {
    const wish = getAllWishes()
    const isExist = wish.find(item => item.product_id === gadget.product_id)
    if (isExist) { return toast.error("Gadget Already exists") }
    wish.push(gadget)
    localStorage.setItem('wish', JSON.stringify(wish))
    toast.success("Successfully added ")
}

const removeWish = (id) => {
    const wish = getAllWishes()
    const remaining = wish.filter(gadget => gadget.product_id != id)
    localStorage.setItem("wish", JSON.stringify(remaining))
    toast.success("Successfully Removed")
}


// export { getAllFavorites, addFavorite, removeFavorite }
export { getAllCarts, addCarts, removeCart, removeWish, addWishes, getAllWishes, removeCartAll }