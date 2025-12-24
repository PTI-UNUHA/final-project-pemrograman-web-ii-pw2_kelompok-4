export default function Artikel ({title, body}) {
    return(
        <div className="max-w-sm w-full rounded-xl overflow-hidden shadow-xl p-6 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="font-extrabold text-2xl mb-2">
                {title}
            </h3>
            <p className="text-sm mb-6 opacity-80">
                {body}
            </p>
        </div>
    )
}