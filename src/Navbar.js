export default function Navbar() {
  let icons = [
    { name: "paper-plane-outline" },
    { name: "compass-outline" },
    { name: "heart-outline" },
    { name: "person-outline" }
  ]

  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="./assets/img/logo.png" alt="Logo do site" />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="./assets/img/logo.png" alt="Logo do site, layout mobile" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          {icons.map(({ name }) => <IonIcon name={name} />)}
        </div>

        <div class="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

function IonIcon({ name }) {
  return <ion-icon name={name}></ion-icon>
}