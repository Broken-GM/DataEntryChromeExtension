import { copyClipboard, camelize } from './helpers/general.js'

const app = () => {
    const url = document.URL;
    const itemRegex = new RegExp(/https:\/\/www\.dndbeyond\.com\/magic-items\/*/gm)

    if (itemRegex.test(url)) {
        const itemName = $( ".page-title" ).text().trim();
        const rarityAndTypString = $( ".details span" ).text().split(",")
        const rarity = camelize(rarityAndTypString[1].trim())
        const type = rarityAndTypString[0].trim()

        let sourceStringArray = $( ".item-source" ).text().split(",")
        if (sourceStringArray.length > 1) {
            sourceStringArray.pop()
        }
        const source = sourceStringArray.join(" ").trim()

        copyClipboard(`${itemName}	${url}	${rarity}		${type}	${source}	`)   
    }
}

export default app