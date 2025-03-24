export function MapSection() {
  return (
    <div className="w-full pb-12 bg-[#faf9f6]">
      <div className="container mx-auto px-4">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.858985322843!2d-34.88968977612345!3d-7.119763699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac74f2f1c0f0f0f%3A0x0!2sRua%20Juvenal%20M%C3%A1rio%20da%20Silva%2C%20805%20-%20Mana%C3%ADra%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058038-480!5e0!3m2!1spt-BR!2sbr!4v1625760000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
} 