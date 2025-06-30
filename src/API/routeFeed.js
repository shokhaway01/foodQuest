export async function POST(req) {
  const data = await req.json();
  const { name, message } = data;

  const telegramBotToken = '7951439199:AAHhLxFjlxcNi-0c9AxuEu_HHoElbqVosl0';
  const chatId = 'ВАШ_CHAT_ID'; // Узнать можно, написав боту и используя метод getUpdates

  const text = `📝 Новый отзыв от ${name}:\n\n${message}`;

  const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!res.ok) {
    return new Response('Ошибка при отправке в Telegram', { status: 500 });
  }

  return new Response('Отправлено в Telegram', { status: 200 });
}
