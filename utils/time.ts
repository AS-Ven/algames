export const toTime = (sec_num: number) => {
    const minutes = Math.floor(sec_num / 60);
    const seconds = sec_num - (minutes * 60);

    return `${minutes} : ${seconds}`;
}