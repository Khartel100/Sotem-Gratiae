const E = window.EVENT;
const $ = id => document.getElementById(id);
document.title = E.name + " Tickets";
$("name").textContent = E.name;
$("tagline").textContent = E.tagline;
$("date").textContent = E.date;
$("venue").textContent = E.venue;
$("contact").textContent = E.contactPhone;
$("contact").href = "tel:" + E.contactPhone.replace(/\s/g, "");

E.tickets.forEach(t => {
  const ready = t.payLink && !t.payLink.startsWith("TODO");
  const a = document.createElement("a");
  a.className = "ticket tier" + (ready ? "" : " off");
  a.href = ready ? t.payLink : "#";
  if (!ready) a.addEventListener("click", e => { e.preventDefault(); alert("Payment link not set yet. Add it in config.js"); });
  const info = document.createElement("span");
  const b = document.createElement("b"); b.textContent = t.name;
  const n = document.createElement("span"); n.className = "mute"; n.textContent = t.note;
  info.append(b, n);
  const p = document.createElement("span"); p.className = "price"; p.textContent = E.currency + " " + t.price;
  const go = document.createElement("span"); go.className = "buy"; go.textContent = "Pay";
  a.append(info, p, go);
  $("tickets").appendChild(a);
});
