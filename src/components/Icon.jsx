import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Compass,
  Film,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Image,
  Landmark,
  Lightbulb,
  Mail,
  MessageCircle,
  Microscope,
  Newspaper,
  Palette,
  PencilRuler,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Cat,
} from "lucide-react";

/**
 * Icon registry — content files reference icons by string name so the
 * content layer stays plain data. Extend with the client's brand icons
 * when they arrive; swap any entry below for a custom SVG component.
 */
const registry = {
  award: Award,
  "book-open": BookOpen,
  briefcase: Briefcase,
  "building-2": Building2,
  calendar: Calendar,
  cat: Cat,
  compass: Compass,
  film: Film,
  globe: Globe,
  "graduation-cap": GraduationCap,
  handshake: Handshake,
  "heart-handshake": HeartHandshake,
  image: Image,
  landmark: Landmark,
  lightbulb: Lightbulb,
  mail: Mail,
  "message-circle": MessageCircle,
  microscope: Microscope,
  newspaper: Newspaper,
  palette: Palette,
  "pencil-ruler": PencilRuler,
  plane: Plane,
  search: Search,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  star: Star,
  target: Target,
  users: Users,
};

export default function Icon({ name, ...props }) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component aria-hidden="true" {...props} />;
}
