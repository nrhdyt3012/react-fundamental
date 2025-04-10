export default function Article () {
    const name = "Dwi Nurhidayat"
    const infos = ["Laki-laki", "30 Desember 2004", "Mahasiswa","Bangka Belitung"]

    //infos.map(item=> item)
    return(
        <>
        <div>{name}</div>
        <div>
            {infos.map((info) => {
                return <div>{info}</div>
            })}
        </div>
        </>
    )
}
