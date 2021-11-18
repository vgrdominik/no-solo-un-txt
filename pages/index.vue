<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-img
          max-width="70%"
          src="/portada.png"
        />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Benvenid@ al worldbuilding de la comunidad de no solo un jpg.
        </v-card-title>
        <v-card-text>
          <p>Este es un proyecto de los fans que, mediante una organización autónoma descentralizada (DAO), queremos crear un lore.</p>
          <p>
            Si tienes preguntas, únete al discord oficial de no solo un jpg: <a
              href="https://discord.gg/NpZB9phMsM"
              target="_blank"
              title="Discord"
              class="white--text"
            >
              click aquí
            </a>.
          </p>
          <p>Puedes participar de dos formas:</p>
          <ol>
            <li><b>Con tu nft de no solo un jpg</b>. Puedes votar todo el lore general y el relacionado con tu clase o items. Si cualquier publicación usa tu nft en la historia deberá ser aprobada por ti.</li>
            <li>
              <b>Crear lore para la comunidad</b>. Al publicar un nft con tu creaación se establecerá una semana para que los owners de no solo un jpg voten por mayoría simple si pasa a ser fidedigno. Si es así cualquier publicación que use tu creación deberá ser aprobada por ti. <a
                @click="$nuxt.$options.router.push('/como-publicar')"
                target="_blank"
                title="Cómo publicar"
                class="white--text"
              >
                Ver cómo publicar aquí.
              </a>
            </li>
          </ol>
          <hr class="my-3">
          <v-row class="mt-4">
            <a
              href="https://www.youtube.com/channel/UCgy6CZCTVJjedfumeEXY1Ew"
              target="_blank"
              class="ml-6"
            >
              <v-img
                max-width="40"
                src="/youtube.png"
              />
            </a>
            <v-spacer />
            <a
              href="https://nosolounjpg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-img
                max-width="40"
                src="/web.png"
              />
            </a>
            <v-spacer />
            <a
              href="https://www.instagram.com/nosolounjpg/"
              target="_blank"
              rel="noopener noreferrer"
              class="mr-6"
            >
              <v-img
                max-width="40"
                src="/instagram.png"
              />
            </a>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="white"
            class="black--text"
            nuxt
            to="/lore-aprobado"
          >
            Ver lore aprobado
          </v-btn>
          <v-spacer />
          <v-btn
            color="white"
            class="black--text"
            nuxt
            to="/lore-pendiente"
          >
            Ver lore pendiente
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
