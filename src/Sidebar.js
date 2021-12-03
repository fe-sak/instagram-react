export default function Sidebar() {
    let sugestoes = [
        { usuarioImg: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você" },
        { usuarioImg: "assets/img/chibirdart.svg", usuario: "chibirdart", razao: "Segue você" },
        { usuarioImg: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram" },
        { usuarioImg: "assets/img/adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você" },
        { usuarioImg: "assets/img/smallcutecats.svg", usuario: "smallcutecats", razao: "Segue você" }
    ]

    return (
        <div class="sidebar">
            <Usuario usuario="catanacomics" usuarioImg="assets/img/catanacomics.svg" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(({ usuarioImg, usuario, razao }) => <Sugestao usuarioImg={usuarioImg} usuario={usuario} razao={razao} />)}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Usuario({ usuario, usuarioImg }) {
    return (
        <div class="usuario">
            <img src={usuarioImg} />
            <div class="texto">
                <strong>{usuario}</strong>
                Catana
            </div>
        </div>
    )
}

function Sugestao({ usuarioImg, usuario, razao }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={usuarioImg} />
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}