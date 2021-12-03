export default function Posts() {
    let posts = [
        { usuarioImg: "assets/img/meowed.svg", usuario: "meowed", conteudoImg: "assets/img/gato-telefone.svg", curtido: "respondeai", curtidas: "101.523" },
        { usuarioImg: "assets/img/barked.svg", usuario: "barked", conteudoImg: "assets/img/dog.svg", curtido: "adorable_animals", curtidas: "99.159" },
        { usuarioImg: "assets/img/meowed.svg", usuario: "meowed", conteudoImg: "assets/img/gato-telefone.svg", curtido: "respondeai", curtidas: "101.523" },
    ]

    return (
        <div class="posts">
            {posts.map(({ usuarioImg, usuario, conteudoImg, curtido, curtidas }) => <Post usuarioImg={usuarioImg} usuario={usuario} conteudoImg={conteudoImg} curtido={curtido} curtidas={curtidas} />)
            }
        </div>
    )
}

function Post({ usuarioImg, usuario, conteudoImg, curtido, curtidas }) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={usuarioImg} alt="Imagem de perfil do usuário" />
                    {usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={conteudoImg} alt="Imagem do conteúdo" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt={"Imagem de perfil de" + curtido} />
                    <div class="texto">
                        Curtido por <strong>{curtido}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>


    )
}