import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 1. CONFIGURAÇÃO LENIS (SCROLL SUAVE) ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    direction: 'vertical', 
});

// Sincronizar Lenis com GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// --- 2. DADOS DO SITE (CARROSSEL) ---
const slidesData = [
    {
        id: 'jordan11',
        name: '11',
        color: '#798c9e',
        textColor: '#fbfbfb',
        bigNumberColor: '#bec0c6',
        jordanTitleColor: '#fbfbfb',
        desc: 'A colorway “Legend Blue” é historicamente conhecida por ter sido associada à Jordan 11 com tons claros em azul, inspirados na Universidade da Carolina do Norte.',
        year: '1995',
        leftLetter: 'FLI', rightLetter: 'GHT',
        imagePath: 'Assets/OIP.inkJooQc2F_VeIryQLr4tgHaHa-removebg-preview (1).png',
        videoPath: 'Assets/Jordan11 ‐ Feito com o Clipchamp.mp4',
        subtitle360: 'Jordan 11 é Elegância. Fluidez. Modernidade.',
        colors360: {
            title: '#fdfdfc',
            subtitle: '#798c9e', /* Azul acinzentado mais claro */
            year: '#798c9e',
            letters: '#e4e3e7'
        },
        details: {
            upper: { title: 'Cabedal', text: 'Cabedal: O Jordan 11 combina mesh balístico com couro envernizado (patent leather), oferecendo leveza, suporte e um visual marcante. É mais moderno e estruturado que modelos antigos, além de proporcionar melhor ajuste ao pé.', bg: '#798c9e', img: 'Assets/jd11Cabedal.png' },
            sole: { title: 'Sola', text: 'Utiliza unidade Air-Sole em comprimento total, proporcionando melhor absorção de impacto e mais conforto que modelos antigos, com sensação mais macia e responsiva.Utiliza unidade Air-Sole em comprimento total, proporcionando melhor absorção de impacto e mais conforto que modelos antigos, com sensação mais macia e responsiva.', img: 'Assets/jd11sola.png' },
            cushion: { title: 'Amortecimento', text: 'Utiliza unidade Air-Sole em comprimento total, proporcionando melhor absorção de impacto e mais conforto que modelos antigos, com sensação mais macia e responsiva.', bg: '#798c9e', img: 'Assets/jd11amortecimento.png' }
        }
    },
    {
        id: 'jordan1',
        name: '1',
        color: '#932f34',
        textColor: '#000000',
        bigNumberColor: '#1d181a',
        jordanTitleColor: '#000000',
        desc: 'Em 1985, a NBA dizia que o tênis do Jordan quebrava o dress code. Toda vez que ele entrava em quadra, a liga multava a Nike.',
        year: '1985',
        leftLetter: 'FLI', rightLetter: 'GHT',
        imagePath: 'Assets/OIP.-Fq8sQuyVomi3bEV3bKtLQHaE7-removebg-preview (1).png',
        videoPath: 'Assets/Jordan 1 ‐ Feito com o Clipchamp.mp4',
        subtitle360: 'O Jordan 1 é história. É rebeldia. É cultura.',
        colors360: {
            title: '#fdfdfc',
            subtitle: '#932f34', /* Vermelho vibrante */
            year: '#932f34',
            letters: '#d41e2b'
        },
        details: {
            upper: { title: 'Cabedal', text: 'O cabedal é geralmente construído em couro natural ou sintético, com painéis costurados que reforçam a estrutura. É resistente, mantém bem o formato do tênis e contribui para o visual clássico e premium. Em contrapartida, tem pouca ventilação e pode ser rígido até se adaptar ao pé.', bg: '#932f34', img: 'Assets/jd1cabedal.png' },
            sole: { title: 'Sola', text: 'A sola é feita de borracha sólida com padrão circular no antepé, o que facilita movimentos de pivô e mudanças rápidas de direção. Oferece boa tração em quadras indoor limpas e também apresenta boa durabilidade para uso casual. Porém, seu desenho é simples comparado aos sistemas modernos de tração multidirecional.', img: 'Assets/jd1sola.png' },
            cushion: { title: 'Amortecimento', text: 'Conta com tecnologia Nike Air encapsulada no calcanhar, proporcionando absorção básica de impacto. A sensação é mais firme e próxima do solo, oferecendo estabilidade, mas com menos maciez e retorno de energia em comparação com tênis de performance atuais.', bg: '#932f34', img: 'Assets/jd1amortecimento.png' }
        }
    },
    {
        id: 'jordan4',
        name: '4',
        color: '#1b2966',
        textColor: '#6373c5',
        bigNumberColor: '#3761f1',  
        jordanTitleColor: '#6373c5',
        desc: 'Com o Air Jordan 4 Blue Thunder, o clássico ganhou uma nova identidade. O azul elétrico substituiu o tradicional, transformando a silhueta em um símbolo moderno criado para se destacar.',
        year: '1989',
        leftLetter: 'FLI', rightLetter: 'GHT',
        imagePath: 'Assets/R.4a5f20ee148b9a843c81d950b243cd-removebg-preview.png',
        videoPath: 'Assets/JORDAN 4 ‐ Feito com o Clipchamp.mp4',
        subtitle360: 'Jordan 4 é Esse é impacto visual. Contraste. Presença forte.',
        colors360: {
            title: '#fdfdfc',
            subtitle: '#1b2966', /* Azul royal claro */
            year: '#1b2966',
            letters: '#6373c5'
        },
        details: {
            upper: { title: 'Cabedal', text: 'O Jordan 4 é geralmente feito em couro ou nobuck, com painéis laterais em mesh que ajudam na ventilação. Possui as “wings” laterais com suportes plásticos que reforçam o ajuste dos cadarços, oferecendo boa estrutura e estabilidade. É firme e resistente, mas não é dos mais leves.', bg: '#1b2966', img: 'Assets/jd4cabedal.png' },
            sole: { title: 'Sola', text: 'A sola combina borracha sólida com padrão em espinha de peixe em áreas estratégicas, garantindo boa tração em quadras indoor. É durável e confiável, embora não seja tão avançada quanto modelos mais recentes.', img: 'Assets/jd4sola.png' },
            cushion: { title: 'Amortecimento', text: 'Conta com unidade Air visível no calcanhar e Air encapsulado no antepé. Oferece absorção de impacto equilibrada, com sensação estável e moderadamente confortável, sem ser extremamente macio ou responsivo.', bg: '#1b2966', img: 'Assets/jd4amortecimento.png' }
        }
    }
];

// --- 3. CURSOR MAGNÉTICO & INTERAÇÃO ---
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot segue instantaneamente
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline segue com delay (efeito fluido)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Aumentar cursor ao passar por links
hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
    });
    trigger.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-hover'));
});

// --- 3.1 BOTÕES MAGNÉTICOS (FÍSICA) ---
const magneticBtns = document.querySelectorAll('.nav-btn');

magneticBtns.forEach(btn => {
    // Performance: Só ativa magnetismo em dispositivos com mouse (pointer: fine)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // O botão é atraído pelo mouse (intensidade 0.3)
        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
        });
        
        // O texto/ícone dentro se move um pouco mais (efeito de profundidade)
        gsap.to(btn.querySelector('span'), {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    btn.addEventListener('mouseleave', () => {
        // Solta o botão (efeito elástico)
        gsap.to([btn, btn.querySelector('span')], {
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
    });
});

// --- 4. HERO PARALLAX (MOUSE MOVEMENT) ---
const heroSection = document.querySelector('.hero');
const shoeImg = document.getElementById('shoe-img');
const bigNum = document.querySelector('.big-number');

heroSection.addEventListener('mousemove', (e) => {
    // Performance: Desativa parallax do mouse em mobile
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 a 1
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    gsap.to(shoeImg, {
        x: x * 20,
        y: y * 20,
        rotation: -15 + (x * 4), // Leve rotação extra
        duration: 1,
        ease: "power2.out"
    });

    gsap.to(bigNum, {
        x: x * -40, // Movimento oposto para profundidade
        y: y * -40,
        duration: 1.5,
        ease: "power2.out"
    });
});

// --- 4.1 DISTORÇÃO LÍQUIDA (FAKE WEBGL) ---
// Aplica o filtro SVG dinamicamente
const liquidFilter = document.querySelector('#liquidFilter feDisplacementMap');
let proxy = { skew: 0 };
let skewSetter = gsap.quickSetter(liquidFilter, "scale", "px"); // Otimização
let clamp = gsap.utils.clamp(-20, 20);

// Aplica o filtro na imagem do Hero
shoeImg.style.filter = "url(#liquidFilter) drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5))";

heroSection.addEventListener('mousemove', (e) => {
    // Performance: Desativa distorção líquida em mobile (muito pesado)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const xPos = e.clientX / window.innerWidth;
    const yPos = e.clientY / window.innerHeight;
    
    // Calcula a velocidade do mouse para distorção
    const velocity = Math.abs(e.movementX) + Math.abs(e.movementY);
    
    gsap.to(proxy, {
        skew: clamp(velocity * 1.5), // Intensidade da distorção baseada na velocidade
        duration: 0.8,
        ease: "power3.out",
        onUpdate: () => skewSetter(proxy.skew)
    });
});

// --- 5. SPLIT TYPE (REVELAÇÃO DE TEXTO) ---
// Função para configurar animação de texto
function setupTextReveals() {
    // Títulos grandes
    const titles = document.querySelectorAll('.jordan-title, .title-360, .detail-title');
    titles.forEach(title => {
        // Reseta se já foi splitado (útil se redimensionar)
        if(title.anim) title.anim.kill();
        
        // Split text
        const split = new SplitType(title, { types: 'chars' });
        
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            rotateX: -90,
            stagger: 0.03,
            duration: 1,
            ease: "back.out(1.7)"
        });
    });

    // Parágrafos e textos menores
    const texts = document.querySelectorAll('.detail-text, .subtitle-360, .description-box p');
    texts.forEach(text => {
        const split = new SplitType(text, { types: 'lines' });
        
        // Envolve linhas em divs overflow: hidden automaticamente pelo SplitType se configurado, 
        // ou animamos o yPercent das linhas
        gsap.from(split.lines, {
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    });
}

// Chama setup de texto
setupTextReveals();

// --- 6. ANIMAÇÕES DE SCROLL (IMAGENS & BLOCOS) ---

// Efeito Pin na Section 360
ScrollTrigger.create({
    trigger: ".section-360",
    start: "top top",
    end: "+=50%",
    pin: true,
    scrub: true
});

// Parallax Intenso nas Imagens de Detalhes
gsap.utils.toArray(".parallax-img").forEach((img) => {
    gsap.fromTo(img, 
        { y: -100, scale: 1.5 },
        { 
            y: 100, 
            scale: 1.4,
            ease: "none",
            scrollTrigger: {
                trigger: img.closest(".detail-block"),
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2 // Scrub um pouco mais suave
            }
        }
    );
});

// Footer Typing Animation
const footerSplit = new SplitType('.typing-text', { types: 'chars' });
gsap.from(footerSplit.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.03,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".site-footer",
        start: "top 80%",
    }
});

// --- 7. LÓGICA CARROSSEL (Troca de Slides) ---
let currentIndex = 0;
const ui = {
    body: document.body,
    bigNumber: document.querySelector('.big-number'),
    titleNum: document.getElementById('model-number'),
    descText: document.getElementById('jordan-desc'),
    jordanTitle: document.querySelector('.jordan-title'),
    shoeImg: document.getElementById('shoe-img'),
    overlay: document.getElementById('transition-overlay'),
    // 360 & Detalhes
    year: document.querySelector('.year-display'),
    title360: document.querySelector('.title-360'),
    subtitle360: document.querySelector('.subtitle-360'),
    video360: document.getElementById('shoe-360-visual'),
    letters: document.querySelectorAll('.letters-side'),
    details: {
        upper: { block: document.getElementById('upper-block'), title: document.getElementById('upper-title'), text: document.getElementById('upper-text'), img: document.getElementById('upper-img') },
        sole: { block: document.getElementById('sole-block'), title: document.getElementById('sole-title'), text: document.getElementById('sole-text'), img: document.getElementById('sole-img') },
        cushion: { block: document.getElementById('cushion-block'), title: document.getElementById('cushion-title'), text: document.getElementById('cushion-text'), img: document.getElementById('cushion-img') }
    },
    githubLink: document.querySelector('.github-link')
};

// Audio Elements
const audioHover = document.getElementById('audio-hover');
const audioClick = document.getElementById('audio-click');
const audioTransition = document.getElementById('audio-transition');
const audioIntro = document.getElementById('audio-intro');

// Inicialização Posicional
gsap.set(ui.shoeImg, { rotation: -15, transformOrigin: "center center" });

function updateSlide(index, direction) {
    const slide = slidesData[index];
    let origin = direction === 'next' ? "90% 50%" : "10% 50%";
    let exitX = direction === 'next' ? -100 : 100;
    let entryX = direction === 'next' ? 100 : -100;

    // Play Sound
    if(audioTransition) { audioTransition.currentTime = 0; audioTransition.play().catch(() => {}); }

    // 1. Preparar Overlay
    ui.overlay.style.backgroundColor = slide.color;
    
    // 2. Criar Timeline Mestra (Substitui setTimeout para fluidez)
    const tl = gsap.timeline({
        onComplete: () => {
            ui.body.style.backgroundColor = slide.color;
            ui.body.style.color = slide.textColor;
            ui.overlay.style.clipPath = "circle(0% at 50% 50%)";
        }
    });

    // 3. Animação de SAÍDA (Elementos atuais saem suavemente)
    tl.to([ui.shoeImg, ui.jordanTitle, ui.descText, ui.bigNumber], {
        x: exitX,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        stagger: 0.05
    }, 0);

    // 4. Transição do Overlay (Wipe)
    tl.fromTo(ui.overlay, 
        { clipPath: `circle(0% at ${origin})` },
        { clipPath: `circle(150% at ${origin})`, duration: 1.2, ease: "expo.inOut" },
        0.1 // Começa logo após o início da saída
    );

    // 5. TROCA DE CONTEÚDO (Callback no meio da transição)
    tl.add(() => {
        // Atualizar Dados
        ui.titleNum.innerText = slide.name;
        ui.descText.innerText = slide.desc;
        ui.shoeImg.src = slide.imagePath;
        ui.bigNumber.style.color = slide.bigNumberColor;
        gsap.set('.jordan-title', { color: slide.jordanTitleColor });
        gsap.set(ui.descText, { color: slide.textColor });

        // Resetar posições para a entrada (invisíveis)
        gsap.set([ui.shoeImg, ui.jordanTitle, ui.descText, ui.bigNumber], { x: entryX, opacity: 0 });
        gsap.set(ui.shoeImg, { rotation: -15 }); 

        // Atualizar Detalhes
        updateDetails(slide);
    }, 0.6); // 0.6s é a metade da animação do overlay (ponto cego)

    // 6. Animação de ENTRADA (Novos elementos entram)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Big Number: Opacidade condicional (0.2 no mobile, 1 no desktop)
    tl.to(ui.bigNumber, {
        x: 0,
        opacity: isMobile ? 0.2 : 1,
        duration: 1,
        ease: "power2.out",
        clearProps: "opacity" // Remove o estilo inline ao final para o CSS (media queries) assumir o controle
    }, 0.7);

    // Outros Elementos: Opacidade total
    tl.to([ui.shoeImg, ui.jordanTitle, ui.descText], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1
    }, 0.8); // Começa 0.1s depois para manter a sequência (stagger) original
}

function updateDetails(slide) {
    // 360 Section
    if(ui.year) ui.year.innerText = slide.year;
    if(ui.subtitle360) ui.subtitle360.innerText = slide.subtitle360;
    if(ui.letters.length) { ui.letters[0].innerText = slide.leftLetter; ui.letters[1].innerText = slide.rightLetter; }
    if(ui.video360 && slide.videoPath) ui.video360.src = slide.videoPath;

    // Cores da Seção 360
    if (slide.colors360) {
        gsap.to(ui.title360, { color: slide.colors360.title, duration: 0.5 });
        gsap.to(ui.subtitle360, { color: slide.colors360.subtitle, duration: 0.5 });
        gsap.to(ui.year, { color: slide.colors360.year, duration: 0.5 });
        gsap.to(ui.letters, { color: slide.colors360.letters, duration: 0.5 });
    }
    
    // Details Section
    if(slide.details) {
        if(slide.details.upper.bg) gsap.to(ui.details.upper.block, { backgroundColor: slide.details.upper.bg, duration: 0.5 });
        ui.details.upper.title.innerText = slide.details.upper.title;
        ui.details.upper.text.innerText = slide.details.upper.text;
        ui.details.upper.img.src = slide.details.upper.img;

        ui.details.sole.title.innerText = slide.details.sole.title;
        ui.details.sole.text.innerText = slide.details.sole.text;
        ui.details.sole.img.src = slide.details.sole.img;

        if(slide.details.cushion.bg) gsap.to(ui.details.cushion.block, { backgroundColor: slide.details.cushion.bg, duration: 0.5 });
        ui.details.cushion.title.innerText = slide.details.cushion.title;
        ui.details.cushion.text.innerText = slide.details.cushion.text;
        ui.details.cushion.img.src = slide.details.cushion.img;
        
        // Recalcular ScrollTrigger para SplitType nos novos textos
        ScrollTrigger.refresh();
    }

    // Footer Link Color
    if(ui.githubLink) {
        gsap.to(ui.githubLink, { color: slide.color, duration: 0.5 });
    }
}

// Event Listeners Botões
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    updateSlide(currentIndex, 'next');
    if(audioClick) { audioClick.currentTime = 0; audioClick.play().catch(() => {}); }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    updateSlide(currentIndex, 'prev');
    if(audioClick) { audioClick.currentTime = 0; audioClick.play().catch(() => {}); }
});

// --- 8. GESTOS DE SWIPE (MOBILE) ---
let touchStartX = 0;
let touchEndX = 0;
const swipeZone = document.querySelector('.hero');

swipeZone.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

swipeZone.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    if (touchEndX < touchStartX - 50) { // Swipe Left -> Next
        currentIndex = (currentIndex + 1) % slidesData.length;
        updateSlide(currentIndex, 'next');
    }
    if (touchEndX > touchStartX + 50) { // Swipe Right -> Prev
        currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
        updateSlide(currentIndex, 'prev');
    }
}

// --- 9. SOUND DESIGN (HOVER GERAL) ---
hoverTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
        if(audioHover) { 
            audioHover.currentTime = 0; 
            audioHover.volume = 0.2; 
            audioHover.playbackRate = 0.8 + Math.random() * 0.4; // Variação de tom (0.8x a 1.2x) para não ficar repetitivo
            audioHover.play().catch(() => {}); 
        }
    });
});

// Inicializar primeiro slide (cores)
ui.body.style.backgroundColor = slidesData[0].color;
ui.body.style.color = slidesData[0].textColor;
ui.bigNumber.style.color = slidesData[0].bigNumberColor;
updateDetails(slidesData[0]);

// --- 10. LOADING SCREEN ANIMATION ---
const loaderCounter = document.querySelector('.loader-counter');
const loaderScreen = document.querySelector('.loader-screen');

// Travar scroll durante loading
lenis.stop();

// Animação das letras "AIR JORDAN"
const loaderBrandSplit = new SplitType('.loader-brand', { types: 'chars' });
gsap.from(loaderBrandSplit.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 1.5,
    ease: "power3.out"
});

let loadProgress = { val: 0 };

const logoFill = document.querySelector('.loader-logo-fill');

gsap.to(loadProgress, {
    val: 100,
    duration: 2.5,
    ease: "power2.inOut",
    onUpdate: () => {
        loaderCounter.innerText = Math.round(loadProgress.val) + "%";
        if(logoFill) logoFill.style.clipPath = `inset(${100 - loadProgress.val}% 0 0 0)`;
    },
    onComplete: () => {
        // Tocar som de Intro (Impacto/Revelação)
        if(audioIntro) { audioIntro.volume = 0.5; audioIntro.play().catch(() => {}); }

        // Animação de Saída do Loader (Slide Up)
        gsap.to(loaderScreen, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => {
                loaderScreen.style.display = 'none';
                lenis.start(); // Libera o scroll
            }
        });
    }
});

// --- 11. OFFCANVAS MENU ANIMATION ---
const offcanvasEl = document.getElementById('offcanvasNavbar');
if (offcanvasEl) {
    offcanvasEl.addEventListener('show.bs.offcanvas', () => {
        // Prepara os links (esconde e move para baixo) antes do menu abrir
        gsap.set('.navbar-nav .nav-link', { y: 50, opacity: 0, skewY: 10 });
        gsap.set('.menu-watermark', { x: 50, opacity: 0 });
        gsap.set('.btn-close', { rotation: -90, opacity: 0 });
    });

    offcanvasEl.addEventListener('shown.bs.offcanvas', () => {
        // Anima a entrada dos links um por um (stagger)
        gsap.to('.navbar-nav .nav-link', {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.to('.menu-watermark', {
            x: 0, opacity: 1, duration: 1.5, ease: "power2.out"
        });

        gsap.to('.btn-close', {
            rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)"
        });
    });
}