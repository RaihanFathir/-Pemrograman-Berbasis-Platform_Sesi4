let DataBarang ={
        name : "Kopi Kapal Api",
        harga : 13000,
        stok : 5,
        pembelian_pertama: 3,
        pembelian_kedua: 2,
        pembelian_ketiga: 1,
        infoBarang : function (){
            return (
                this.name + "\n" +
                "Harga: Rp." + this.harga  + "\n" +
                "Stok tersedia: " + this.stok
    
            )
        },
        Diskon : function (){
            return(
                "Harga setelah diskon: Rp." + (this.harga-(this.harga*20/100))
            )
        },

        Beli : function (jumlah){
            if (jumlah <= this.stok){
                this.stok = this.stok - jumlah;
                return (
                    "pembelian berhasil! Anda membeli " + jumlah + " " + this.name + "." + "\n" +
                    "Sisa stok sekarang: " + this.stok
                )
            }
            else{
                return (
                    "Maaf, stok produk habis!"
                )
            }

        },
    }
    console.log(DataBarang.infoBarang())
    console.log("--------------------")
    console.log(DataBarang.Diskon())
    console.log("--------------------")
    console.log(DataBarang.Beli(DataBarang.pembelian_pertama))
    console.log("--------------------")
    console.log(DataBarang.Beli(DataBarang.pembelian_kedua))
    console.log("--------------------")
    console.log(DataBarang.Beli(DataBarang.pembelian_ketiga))

