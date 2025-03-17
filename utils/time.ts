export const toTime = (sec_num: number) => {
    const minutes: number = Math.floor(sec_num / 60)
    const seconds: number = sec_num - (minutes * 60)

    return `
        ${minutes < 10 ? `0${minutes}` : minutes} :
        ${seconds < 10 ? `0${seconds}` : seconds}
    `
}