 tp.getCurrentWallet('eos').then(function(data){
	  tp.eosTokenTransfer({
		from: data.data.name,
		to: '1352acozooms', 
		amount: amount,
		tokenName: 'EOS',
		precision: 4,
		contract: 'eosio.token',
		memo: 'upgrade',
		address: 'EOS7ds9A9FGDsKrdymQ4ynKbMgbCVaaaaaaaaaaa'
	}).then(function(data){
		if(data.result){
		
		}else{
		
		}
	})              
})
