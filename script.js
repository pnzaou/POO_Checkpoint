class Produit {
    constructor(id, nom, prix){
        this.id = id
        this.nom = nom
        this.prix = prix
    }
}

class ProduitPanier {
    constructor(produit, qte){
        this.produit = produit
        this.qte = qte
    }

   prixTotal() {
    return this.produit.prix * this.qte
   } 
}

class Panier {
    constructor(){
        this.produits = []
        this.prixTotal = 0
    }

    TotalProduits() {
        return this.produits.length
    }

    ajoutProduit(prod, qte){
        const produit = new ProduitPanier(prod, qte)
        this.produits.push(produit)
        this.prixTotal += prod.prix * qte
    }

    supprimerProduit(id){
        this.produits = this.produits.filter(el => el.produit.id !== id)
    }

    afficherProduits(){
        this.produits.forEach(el => {
            console.log(`Produit: ${el.produit.nom}, Qte: ${el.qte}, Prix total : ${el.prixTotal()}`);
        })
    }

    aficherPrixTotalPanier(){
        console.log(`Prix total du panier : ${this.prixTotal}`);
    }
}


const p1 = new Produit(1, 'Pomme', '500')
const p2 = new Produit(2, 'Banane', '700')

const panier = new Panier()
panier.ajoutProduit(p1, 4)
panier.ajoutProduit(p2, 2)

console.log('Produits dans le panier :')
panier.afficherProduits()
panier.aficherPrixTotalPanier()

panier.supprimerProduit(1)
console.log('Produits dans le panier apres la suppression:')
panier.afficherProduits()
panier.aficherPrixTotalPanier()

