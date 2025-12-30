import { useEffect, useState } from 'react';

export function FeedbackSystem() {
    const [active, setActive] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [targetInfo, setTargetInfo] = useState<{ tag: string; classes: string; text: string } | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === 'b') { // Ctrl+B to toggle feedback mode
                setActive(!active);
                if (!active) {
                    console.log('%c [FEEDBACK_MODE] Active! Use Ctrl+Click on elements to provide feedback.', 'color: #8b5cf6; font-weight: bold;');
                }
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (e.ctrlKey && active) {
                e.preventDefault();
                e.stopPropagation();

                const target = e.target as HTMLElement;
                const info = {
                    tag: target.tagName.toLowerCase(),
                    classes: target.className || '',
                    text: target.innerText?.substring(0, 30) || ''
                };

                setTargetInfo(info);
                setPosition({ x: e.clientX, y: e.clientY });

                // Highlight effect
                const originalOutline = target.style.outline;
                target.style.outline = '2px solid #8b5cf6';
                setTimeout(() => { target.style.outline = originalOutline; }, 2000);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('click', handleClick, true);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('click', handleClick, true);
        };
    }, [active]);

    const submitFeedback = () => {
        if (feedback.trim()) {
            console.log(`[AGENT_FEEDBACK] Element: <${targetInfo?.tag} class="${targetInfo?.classes}"> Comment: "${feedback}"`);
            setFeedback('');
            setTargetInfo(null);
        }
    };

    if (!active) {
        return null;
    }

    return (
        <>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-primary text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold animate-bounce">
                🛠️ Feedback Mode Active! Ctrl + Click on any element
            </div>

            {targetInfo && (
                <div
                    className="fixed z-[10000] bg-bento-card border border-primary p-4 rounded-xl shadow-2xl min-w-[300px]"
                    style={{ top: Math.min(position.y, window.innerHeight - 200), left: Math.min(position.x, window.innerWidth - 320) }}
                >
                    <div className="text-[10px] text-primary mb-2 font-mono">
                        Target: &lt;{targetInfo.tag}&gt; .{targetInfo.classes.split(' ').join('.')}
                    </div>
                    <textarea
                        autoFocus
                        className="w-full bg-bento-dark border border-bento-border rounded-lg p-2 text-xs text-white focus:border-primary outline-none h-20"
                        placeholder="¿Qué quieres cambiar de este elemento?"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.ctrlKey) submitFeedback();
                            if (e.key === 'Escape') setTargetInfo(null);
                        }}
                    />
                    <div className="flex justify-between mt-3">
                        <button
                            onClick={() => setTargetInfo(null)}
                            className="px-3 py-1 text-[10px] text-gray-400 hover:text-white"
                        >
                            Cancelar (Esc)
                        </button>
                        <button
                            onClick={submitFeedback}
                            className="bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold"
                        >
                            Enviar Comentario (Ctrl+Enter)
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
