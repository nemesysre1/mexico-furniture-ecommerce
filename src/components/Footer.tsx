import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 py-12 text-center text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} UD.Mexico Furniture. All rights reserved.</p>
        <p>Designed by D-3 Teknik Informatika USU Team</p>
      </div>
    </footer>
  );
}
