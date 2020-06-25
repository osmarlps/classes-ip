const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('LIVE')
})

app.get('/:ip', (request, response)=>{
    const ip = request.params.ip
    let classe = classificarNumeroIP(formatarNumeroIP(ip))

    response.json({
        classe: classe
    })
})

// formatarNumeroIP(ip)
function formatarNumeroIP(ip){
    let ipFormatado = ''

    if(ip.length >= 12){
  	    for(let i = 0; i < ip.length; i++){
            if(isNaN(ip[i]) == false && ipFormatado.length < 15){
      	        ipFormatado += ip[i]
        
                if(ipFormatado.length == 3 ||
                   ipFormatado.length == 7 ||
                   ipFormatado.length == 11){
        	        ipFormatado += '.'
                }
            }
        }
        return ipFormatado.split('.')
    }
    else {
  	    return false
    }
}

// classificarNumeroIP(formatarNumeroIP(ip))
function classificarNumeroIP(numeroIpFormatado){
    if((numeroIpFormatado[0] >= 0 && numeroIpFormatado[0] <= 255) &&
       (numeroIpFormatado[1] >= 0 && numeroIpFormatado[1] <= 255) &&
       (numeroIpFormatado[2] >= 0 && numeroIpFormatado[2] <= 255) &&
       (numeroIpFormatado[3] >= 0 && numeroIpFormatado[3] <= 255)){
  	    if(numeroIpFormatado[0] >= 0 && numeroIpFormatado[0] <= 127){
    	    return 'A'
        }
        else if(numeroIpFormatado[0] >= 128 && numeroIpFormatado[0] <= 191){
    	    return 'B'
        }
        else if(numeroIpFormatado[0] >= 192 && numeroIpFormatado[0] <= 223){
            return 'C'
        }
        else if(numeroIpFormatado[0] >= 224 && numeroIpFormatado[0] <= 239){
            return 'D'
        }
        else if(numeroIpFormatado[0] >= 140 && numeroIpFormatado[0] <= 255){
            return 'E'
        }
    }
    else {
        return false
    }
}