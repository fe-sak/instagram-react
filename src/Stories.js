export default function Stories() {
    let stories = [
        { img: "assets/img/9gag.svg", usuario: "9gag" },
        { img: "assets/img/meowed.svg", usuario: "meowed" },
        { img: "assets/img/barked.svg", usuario: "barked" },
        { img: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { img: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        { img: "assets/img/respondeai.svg", usuario: "respondeai" },
        { img: "assets/img/filomoderna.svg", usuario: "filomoderna" },
        { img: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" }
    ]

    return (
        <div class="stories">
            {stories.map(({ img, usuario }) => <Story img={img} usuario={usuario} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story({ img, usuario }) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={img} alt="Imagem de perfil do usuário" />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    )
}