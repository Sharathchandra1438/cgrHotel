interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-12">
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    <div className="w-20 h-1 bg-gold mx-auto mb-4 rounded-full" />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
