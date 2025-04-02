const LocationImage = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 relative group">
      <img
        src="https://lh3.googleusercontent.com/gps-cs/ADgaOlr0T792JjFsQdIWyhVzYjRn1VdxRdwXJ-7SQD-eOj5wAlIsV5P23c20Gyimz7gWxRkJudk5AroG3kOok3t6c7pGYbmVjJdrRKRXl5skSl-BlkWwx-WyUTt4PuvU4NtgkOeKgOH8IgigE-7d=w750-h813-p-k-no"
        alt="UPES Campus Aerial View"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 flex items-end justify-start p-6">
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2">UPES Bidholi Campus</h3>
          <p className="text-white/80">Dehradun, Uttarakhand 248007</p>
        </div>
      </div>
    </div>
  )
}

export default LocationImage

