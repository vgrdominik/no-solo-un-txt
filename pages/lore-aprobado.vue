<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <h1>Lore aprobado</h1>
    </v-col>
  </v-row>
</template>


<script>
import * as Web3 from 'web3'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      test: null,
    }
  },

  computed: {
    account() {
      return this.getAccount()
    }
  },

  methods: {
    checkNft() {
      if (! this.account) {
        return
      }

      let web3 = new Web3(
        new Web3.providers.HttpProvider('https://polygon-rpc.com')
      )

      const ERC165Abi = [
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ]

      const openSeaErc1155Contract = "0x2953399124f0cbb46d2cbacd8a89cf0599974963"
      //const tokenId = '97465292781721571611177930354272544023530438298057205090993582389659843952641'
      const tokenId = '97465292781721571611177930354272544023530438298057205090993582331385727680513'

      const openSeaContract = new web3.eth.Contract(
        ERC165Abi,
        openSeaErc1155Contract
      )
      openSeaContract.methods
        .balanceOf(this.account, tokenId)
        .call()
        .then((res) => {
          console.log(res)
        })
    },

    ...mapGetters({
      getAccount: 'user/getAccount'
    }),
  }
}
</script>
