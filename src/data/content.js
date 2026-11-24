export const businessInfo = {
  name: "Auto Socorro Dudu",
  city: "São Luís",
  fullLocation: "São Luís - Maranhão e toda região",
  phoneDisplay: "(98) 98181-3296",
  phoneRaw: "5598981813296",
  phoneCallUrl: "tel:98981813296",
  whatsappUrl: "https://wa.me/5598981813296?text=Olá! Preciso de um reboque em São Luís ou região. Poderia me ajudar com um orçamento rápido?",
  googleMapsUrl: "https://www.google.com.br/maps/place/Reboque+24+horas/@-2.5485578,-44.2095033,17z/",
  availability: "24 Horas por dia, 7 dias por semana",
  addressNotes: "São Luís - MA (Atendimento urbano e rodoviário)",
  pendingInfo: {
    cnpj: "A preencher pelo cliente",
    enderecoBase: "São Luís - MA (Endereço físico detalhado a confirmar pelo proprietário)",
    email: "contato@autosocorrodudu.com.br (A confirmar)",
  }
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const vehiclesServed = [
  {
    id: "reboque24h",
    name: "Reboque 24 horas",
    description: "Atendimento emergencial a qualquer hora do dia ou da noite.",
    image: "/images/vehicle-carros-novo.png",
    whatsappMsg: "Olá! Preciso de reboque 24 horas em São Luís."
  },
  {
    id: "remocao",
    name: "Remoção de veículos",
    description: "Remoção segura de veículos com pane ou acidentados.",
    image: "/images/vehicle-motos-novo.png",
    whatsappMsg: "Olá! Preciso de remoção de veículo em São Luís/região."
  },
  {
    id: "transporte",
    name: "Transporte de carros e motos",
    description: "Transporte seguro de carros e motos para qualquer destino na região.",
    image: "/images/vehicle-utilitarios-novo.png",
    whatsappMsg: "Olá! Preciso de transporte de carro/moto em São Luís."
  },
  {
    id: "cobertura",
    name: "Atendimento em toda São Luís e região",
    description: "Cobertura completa em São Luís - MA e cidades vizinhas.",
    image: "/images/vehicle-vans-novo.png",
    whatsappMsg: "Olá! Gostaria de saber a área de cobertura da Auto Socorro Dudu."
  },
  {
    id: "assistencia",
    name: "Assistência rápida para veículos com problemas",
    description: "Socorro rápido para veículos com pane mecânica ou elétrica.",
    image: "/images/vehicle-caminhonetes-novo.png",
    whatsappMsg: "Olá! Meu veículo apresentou problema, preciso de assistência em São Luís."
  },
];

export const regionalCities = [
  { name: "São Luís", time: "10 a 20 min", status: "Base Principal (Pronta Resposta)", isHub: true },
  { name: "Raposa", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "São José de Ribamar", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "Paço do Lumiar", time: "15 a 25 min", status: "Atendimento Rápido", isHub: false },
  { name: "Bacabal", time: "20 a 30 min", status: "Atendimento Rápido", isHub: false },
  { name: "Imperatriz", time: "20 a 30 min", status: "Atendimento Rápido", isHub: false },
];

export const highwaysCovered = [
  { name: "BR-135", desc: "Trecho São Luís e região metropolitana" },
  { name: "BR-402", desc: "Acesso à Ilha de São Luís" },
  { name: "MA-203", desc: "Ligação São Luís a cidades vizinhas" },
  { name: "MA-014", desc: "Acesso à região metropolitana" },
];

export const serviceDifferentials = [
  {
    title: "Atendimento rápido",
    desc: "Socorro imediato para veículos com pane ou acidentados em São Luís e região.",
    icon: "Clock",
  },
  {
    title: "Disponibilidade 24 horas",
    desc: "Atendimento dia e noite, finais de semana e feriados. Sempre prontos para te ajudar.",
    icon: "ShieldCheck",
  },
  {
    title: "Profissionais experientes",
    desc: "Equipe treinada em reboque, remoção e transporte de veículos com total segurança.",
    icon: "Award",
  },
  {
    title: "Serviço seguro e confiável",
    desc: "Equipamentos adequados e cuidado com seu veículo durante todo o transporte.",
    icon: "BadgePercent",
  },
  {
    title: "Cobertura em São Luís e região",
    desc: "Atendimento em todos os bairros de São Luís e cidades da região metropolitana.",
    icon: "MapPin",
  },
];

export const reviews = [
  { name: "Fredson Cruz", location: "Maranhão", text: "Excelente atendimento, rápido e prestativo." },
  { name: "Mateusinho Moreira", location: "Maranhão", text: "Serviço de qualidade e de custo acessível." },
];

export const faqs = [
  {
    question: "Como solicitar um reboque agora?",
    answer: "Basta clicar no botão de WhatsApp e enviar uma mensagem para (98) 98181-3296. Informe onde você está e qual o problema com seu veículo para passarmos o orçamento e tempo estimado na hora.",
  },
  {
    question: "Quanto tempo demora para o reboque chegar?",
    answer: "Em São Luís, o tempo médio costuma ser de 15 a 25 minutos dependendo do trânsito e bairro. Para cidades vizinhas, a equipe é despachada imediatamente pela via mais rápida.",
  },
  {
    question: "Vocês atendem motos e carros?",
    answer: "Sim! Trabalhamos com reboque e transporte de carros, motos e outros veículos com total segurança e cuidado.",
  },
  {
    question: "O serviço funciona de madrugada, domingo e feriado?",
    answer: "Sim, a Auto Socorro Dudu opera 24 horas por dia, 365 dias por ano. Você pode nos contatar a qualquer momento.",
  },
  {
    question: "Vocês realizam transporte para outras cidades?",
    answer: "Sim, realizamos transporte intermunicipal e viagens programadas para veículos. Consulte a disponibilidade e valores pelo WhatsApp.",
  },
];
