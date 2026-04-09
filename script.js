const message = [
    "สวัสดีตอนเช้า",
    "ขอให้วันนี้เป็นวันที่ดีของคุณนะ",
    "ความสำเร็จเริ่มจากการลงมือทำ",
    "อย่าเพิ่งยอมแพ้ พรุ่งนี้ยังมีเสมอ",
    "รอยยิ้มของคุณทำให้โลกสดใสขึ้นนะ",
    "จงภูมิใจในตัวเองที่ผ่านเมื่อวานมาได้"
];
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => createNotification())

const container = document.querySelector(".container")

function randomMessage() {

    return message[Math.floor(Math.random() * message.length)]
}

function createNotification() {
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText = randomMessage()
    container.appendChild(notificationEl)
    setTimeout(() => {
        notificationEl.remove()
    }, 3000)
}