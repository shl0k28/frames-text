import { getAddressForFid } from 'frames.js'

const fid = 19745

const main = async () => {
    const url = `https://nemes.farcaster.xyz:2281/v1/verificationsByFid?fid=${fid}`

    const res = await fetch(url)
    const data = await res.json()
    console.log(data.messages[0].data)
}

main()