// ═══════════════════════════════════════════════════════════════════
// TAROT ORACLE — Standard Readings  (readings-standard.js)
// Each card has upright + reversed text.
// buildOverallSTD() generates a natural combined vision.
// ═══════════════════════════════════════════════════════════════════

window.TAROT_READINGS_STD = {

  'The Fool': {
    upright: 'A new chapter beckons with open arms, and the universe is inviting you to leap without overthinking. The path ahead is unwritten — trust that it will reveal itself beneath your feet as you move. Release your grip on certainty and embrace the wild, wonderful magic of pure potential. This moment belongs to courage, to playfulness, and to the kind of open heart that only beginners carry.',
    reversed: 'The leap has been hesitated one time too many, or perhaps you have leapt too recklessly without looking. Some part of you is clinging to the cliff edge when the sky is right there waiting. Fear disguised as wisdom is still fear. Ask yourself honestly: is it caution speaking, or is it the comfortable weight of staying small?'
  },

  'The Magician': {
    upright: 'Every tool you need is already laid out before you — wand, cup, sword, and coin — waiting for focused will to animate them. This is a moment of genuine personal power, where your intention can shape reality in measurable ways. Channel your attention with precision and watch the world reorganize itself in response. You are not waiting for permission; you are the architect.',
    reversed: 'Power misused or potential left squandered — the tools are all there, but the hand that holds them wavers. There may be trickery at play, either from without or from a corner of yourself that prefers the appearance of ability to its actual exercise. Reclaim your focus. A scattered magician is just a person with props.'
  },

  'The High Priestess': {
    upright: 'The answers you seek live not in the noise of the outer world but in the still, deep water within. Something is making itself known to you below the threshold of language — a knowing that arrives as feeling rather than thought. The High Priestess does not explain herself; she simply knows. This is a time to listen more than you speak, and to trust what you hear in the silence.',
    reversed: 'The inner voice has been drowned out — by busyness, by other people\'s opinions, by the seductive certainty of facts that miss the point. You may be ignoring an intuition that has been trying to reach you for some time. Or secrets are being kept, perhaps even from yourself. Find the stillness. It will not wait forever.'
  },

  'The Empress': {
    upright: 'You are entering a season of abundance and natural flourishing, where creativity grows as easily as a garden in summer rain. Let yourself receive the nourishment you have earned — in body, in spirit, in relationship. Your capacity to nurture is one of your great gifts, but you cannot pour from an empty vessel. Tend your own roots first, and everything around you will bloom.',
    reversed: 'The soil has been over-tended or neglected — abundance is blocked, creativity feels dry, and the instinct to nurture has curdled into control or self-neglect. Something in your world needs care that it is not receiving, and that something may be you. Return to the basics: rest, beauty, sensory pleasure, and the patient rhythms of nature.'
  },

  'The Emperor': {
    upright: 'Structure, discipline, and clear intention are your greatest allies in this moment. This is a time to build deliberately — to lay foundations that will hold, to lead from a place of grounded authority rather than reactive force. Stability does not come from controlling others or circumstances; it comes from the bedrock you establish within yourself. Set the terms and hold them with quiet confidence.',
    reversed: 'Authority has become rigidity, or the structure you trusted has revealed itself as a cage. Someone — possibly you — is confusing control with strength, and rules with wisdom. True power is not threatened by change. Ask yourself: are you building something real, or just defending the shape of what used to be real?'
  },

  'The Hierophant': {
    upright: 'Ancient wisdom is calling to you — through tradition, through a mentor, through the accumulated knowledge of those who walked this path before you. There is power in established structures when approached with discernment rather than blind deference. You may be the one called to teach, or the one finally ready to learn. Either way, ceremony and belonging carry genuine meaning now.',
    reversed: 'The institution has failed, or the tradition has calcified into mere performance. What was once sacred has become a tool of conformity, and something in you recognizes this even if you cannot yet name it. Question the orthodoxy. The spirit of the teaching matters more than its letter, and the true heretic is often the truest believer of all.'
  },

  'The Lovers': {
    upright: 'A significant choice stands before you — one that asks you to align not just your desires but your deepest values. Whether in love, in vocation, or in the path you choose forward, this decision calls for wholeness rather than convenience. Choose from your full self, not from fear of being alone or left behind. The Lovers card is ultimately about integrity: being undivided within yourself.',
    reversed: 'A choice is being avoided, or a relationship — with another or with yourself — is out of alignment. You may be choosing based on what you think you should want rather than what you actually want. Both options may involve loss. Make the choice anyway, from clarity rather than desperation, and trust that alignment will follow honesty.'
  },

  'The Chariot': {
    upright: 'Victory is available to you — but only when the opposing forces within you are yoked together and driven forward by unified will. The obstacles in your path are not asking you to stop; they are asking how much you want this. Assert yourself with discipline, move through resistance with deliberate energy, and trust that the momentum you build now will carry further than you expect.',
    reversed: 'The chariot has veered, or the reins have been dropped. Aggression, lack of direction, or the failure to integrate conflicting drives is scattering your energy. What looked like forward motion may actually be running — from something rather than toward something. Slow down enough to ask where you are actually going, and whether the vehicle you\'re in will take you there.'
  },

  'Strength': {
    upright: 'True power wears the face of compassion and patience rather than force. What cannot be broken open by pressure can be gently transformed by love — and this card is asking you to try that approach now. Your courage in this moment is not the roar of dominance but the quiet certainty of someone who knows they can face whatever comes without becoming it. Gentleness is the most demanding discipline.',
    reversed: 'The beast is winning — either through raw impulsivity, or through the overcorrection of rigid self-suppression. Something primal is demanding to be heard and is being either indulged carelessly or repressed dangerously. Both extremes lead to the same place. What would it look like to be fully present with this energy without being consumed by it?'
  },

  'The Hermit': {
    upright: 'A period of sacred solitude is calling you inward — not as retreat from life but as preparation for deeper engagement with it. The lantern illuminates only the next step, and that is precisely enough. You do not need the whole path visible; you need the courage to take the step that is lit. What you are seeking will be found in the quiet, not the crowd.',
    reversed: 'Isolation has tipped into loneliness, or the inward retreat has become avoidance rather than renewal. Alternatively, solitude is being resisted — you are surrounding yourself with noise to avoid what the silence would say. The hermit reversed asks: are you hiding, or have you truly found what you went to look for?'
  },

  'Wheel of Fortune': {
    upright: 'The great wheel turns, and with it comes change you did not plan and cannot prevent — but you can choose how you meet it. What rises will fall; what falls will rise again. You are not the wheel. You are the awareness watching it turn. Stay grounded as the world reorganizes itself around you, and trust that the cycle is moving toward something, even when that something is not yet visible.',
    reversed: 'The wheel has stalled, or its turning is bringing setbacks where you hoped for progress. Resistance to change may be intensifying the friction. External forces feel chaotic and beyond control — because they are. The question is whether you respond with desperation or with the long view. Bad luck does not last. Neither does good. Work with what is actually in front of you.'
  },

  'Justice': {
    upright: 'Truth is the most durable force in existence, and right now it demands your honesty — with yourself above all. The scales are balanced by your own choices: every cause has its effect, every action its consequence. This is not a moment for self-justification or minimizing. Act from integrity, and what returns to you will be worthy of who you are. Be honest. Be clear. Be accountable.',
    reversed: 'Something is out of balance — perhaps a situation not dealt with fairly, or a truth you have been carefully looking past. Avoidance of accountability tends to compound whatever it avoids. If you have been wronged, this card asks whether pursuing justice is serving you or consuming you. If you have wronged another, you know what needs to happen.'
  },

  'The Hanged Man': {
    upright: 'Surrender is not defeat — it is the most advanced form of trust available to a human being. By releasing your grip on how things should unfold, you open yourself to a perspective that was simply unavailable while you were in control. This pause, this suspension, this turning of the world upside down: it is not wasted time. Something profound is shifting in your understanding. Let it.',
    reversed: 'The surrender is being resisted, or the suspension has gone on far longer than it needed to. You may be sacrificing for a cause that no longer requires it, or waiting to be rescued when you could simply take yourself down. At some point, the hanging must end. Are you choosing to remain, or have you simply forgotten that you can move?'
  },

  'Death': {
    upright: 'Something is ending — and this ending is necessary, purposeful, and ultimately kind, even if it does not feel that way right now. Do not cling to what the current is already carrying away. It has served its purpose; the space it leaves is sacred and full of potential. Transformation is rarely comfortable, but what dies here is only a version of you that can no longer grow. Something larger is becoming.',
    reversed: 'Change is being resisted past the point where resistance serves anything. Something that should have ended is being kept alive by fear — fear of the unknown, fear of grief, fear of who you will be without it. Or the transformation is happening invisibly from the inside, and you cannot yet see what is being shed. Either way, release is the medicine here, not the threat.'
  },

  'Temperance': {
    upright: 'The art of this moment is dynamic balance — not the sterile stillness of avoidance, but the flowing integration of opposites. Patience and action. Vision and practicality. The angel pours between vessels without spilling a single drop, and you too are being asked to hold complexity with grace. The moderate path is not the timid one; it is the most demanding form of wisdom available.',
    reversed: 'Balance has been lost — through excess, through emotional volatility, or through the kind of impatience that mistakes speed for progress. Something is being forced when it should flow, or avoided when it should be engaged. What in your life is currently out of proportion? What would it look like to pour more slowly, more deliberately, with more care?'
  },

  'The Devil': {
    upright: 'What you believe is chaining you may be far looser than it appears. The Devil\'s great trick is convincing you the bonds are unbreakable when they are simply familiar. Look clearly at the patterns, appetites, and fears that have kept you cycling in the same place — not with self-loathing, but with unflinching honesty. Freedom begins the moment you see the chain for what it actually is.',
    reversed: 'The shadow work is underway — you are beginning to see the mechanism, name the pattern, loosen what had a grip on you. This is uncomfortable, necessary, and ultimately liberating. The reversed Devil can also mean temptation resisted, or a compulsion beginning to release its hold. Do not celebrate too soon, but acknowledge that something real is genuinely shifting.'
  },

  'The Tower': {
    upright: 'What is falling was never truly stable. The lightning of truth strikes at structures built on false foundations, and the collapse — though frightening — clears ground that was never capable of supporting what you were trying to build on it. This disruption is not punishment. It is the universe editing in real time. Let what must fall, fall. The rubble is already full of better materials.',
    reversed: 'Collapse has been narrowly averted, or the Tower\'s energy is building slowly rather than striking all at once. Change is coming, but delayed — whether through genuine resilience or through desperate shoring up of what cannot hold. The question is whether you are using the time to build something stronger, or simply delaying an inevitable and necessary reckoning.'
  },

  'The Star': {
    upright: 'After the storm, the sky clears and the stars come out — ancient, reliable, shining with light that has crossed impossible distances just to reach you. Hope is not naive. It is the accurate recognition that life is moving toward something meaningful. Trust the inspiration rising in you now. Your wishes, offered honestly to the cosmos, are heard. Renewal is already quietly underway.',
    reversed: 'Hope has dimmed, or faith in the future has been eroded by repeated disappointment. It can be difficult to believe in stars when you have spent too long in a room with no windows. The reversed Star asks whether the despair is proportionate, or whether it has become a lens distorting your entire view of what is possible. One small act of trust can be enough to begin again.'
  },

  'The Moon': {
    upright: 'You are moving through the liminal territory between what is known and what is merely imagined — where intuition and anxiety wear each other\'s faces. The path is not well lit, and that is by design. Slow down. Trust the instincts that have kept you safe before. Not every shadow is a threat, but not every path is yours to walk. Let the moon reveal what the sun has been too loud to show you.',
    reversed: 'The fog is beginning to clear — illusions are being seen through, and a confusion or deception that muddied your clarity is finally becoming visible. You are finding your footing in territory that recently felt treacherous. The anxiety was real, but perhaps not everything it told you was accurate. Bring what you\'ve learned through the dark carefully and deliberately into the light.'
  },

  'The Sun': {
    upright: 'Joy is not a reward to be earned after sufficient suffering — it is your birthright, and this card is handing it back to you. This is a time of genuine radiance: clear seeing, vital energy, and the warm certainty that life is good and your place in it is secure. Whatever you create now carries the light of authentic enthusiasm. Let yourself be happy. Fully. Without the footnotes.',
    reversed: 'The light is dimmed or the joy feels effortful, as if you are performing happiness rather than inhabiting it. Perhaps expectations are too high, or comparison to others too constant. The sun is still there behind the clouds — it has not been cancelled. Something may need to shift in how you are orienting yourself before you can actually feel the warmth again.'
  },

  'Judgement': {
    upright: 'A call is ringing out across your life — not a summons to punishment, but to recognition. You are being invited to rise into a fuller version of yourself, to answer at last for who you truly are and what you are here to do. Lay down the past self who no longer fits. Step forward into what you have actually become. This is not an ending; it is the moment before the real beginning.',
    reversed: 'The call has been heard but is being ignored — or perhaps you have judged yourself so harshly that you cannot hear the invitation beneath the verdict. Self-condemnation is not the same as accountability, and neither is it the same as honesty. Ask whether the story you tell about who you are is actually true, or simply the story that feels safest to believe.'
  },

  'The World': {
    upright: 'You have arrived — not at a final destination, but at a genuine completion. The work of this cycle is truly done, and the world opens its arms to receive what you have made of yourself through it. This is a moment for integration, for celebration, and for the quiet satisfaction of realizing how far you have actually traveled. Honor this before the next spiral begins. You have earned it.',
    reversed: 'Completion is just out of reach — something prevents the final step from landing. There may be unfinished business from earlier in the cycle, a lesson not quite learned, a loose thread. The reversed World is not failure; it is a card asking what remains before you can truly call this chapter closed. Find it. Attend to it. The ending is closer than it feels.'
  }

};

// ─────────────────────────────────────────────────────────────────
// COMBINED VISION BUILDER — standard mode
// Generates a natural synthesis reading that references the actual cards drawn
// ─────────────────────────────────────────────────────────────────
window.buildOverallSTD = function(drawnCards, labels) {
  var names = drawnCards.map(function(c) { return c.name; });
  var n = names.length;

  var majorThemes = {
    transformation: ['Death','The Tower','Judgement','The Fool','The World'],
    power:          ['The Magician','The Emperor','The Chariot','Strength'],
    inner:          ['The High Priestess','The Hermit','The Moon','The Hanged Man'],
    heart:          ['The Lovers','The Empress','The Star','Temperance'],
    challenge:      ['The Devil','The Tower','The Moon','Wheel of Fortune'],
    clarity:        ['Justice','The Sun','Judgement','The Star'],
    cycle:          ['Wheel of Fortune','The World','Death','The Fool']
  };

  var scores = {};
  Object.keys(majorThemes).forEach(function(theme) {
    scores[theme] = 0;
    names.forEach(function(name) {
      if (majorThemes[theme].indexOf(name) !== -1) scores[theme]++;
    });
  });
  var dominantTheme = Object.keys(scores).sort(function(a,b){ return scores[b]-scores[a]; })[0] || 'transformation';

  var reversedCount = drawnCards.filter(function(c){ return c.reversed; }).length;
  var reversedNote = '';
  if (reversedCount === n && n > 1) {
    reversedNote = ' With every card reversed, this reading turns almost entirely inward — the real drama here is not in circumstances but in the interior landscape of your own awareness.';
  } else if (reversedCount === 1) {
    reversedNote = ' The one reversed card introduces a note of friction or internalization into an otherwise outward-moving narrative — something within resists while something else reaches forward.';
  } else if (reversedCount > 1) {
    reversedNote = ' Several cards reversed suggests this is not a smooth or linear passage — there is genuine resistance at work here, and growth is happening through and despite it.';
  }

  var frame = '';
  if (n === 1) {
    frame = names[0] + ' arrives as your sole counsel, which gives its message unusual weight and directness. A single card asked to carry a full reading tends to speak without ceremony.';
  } else if (n === 3) {
    frame = 'The movement from ' + names[0] + ' through ' + names[1] + ' and arriving at ' + names[2] + ' traces an arc that belongs specifically to where you are right now.';
  } else {
    frame = names.slice(0,-1).join(', ') + ', and ' + names[n-1] + ' form a constellation that is particular to your situation at this moment.';
  }

  var themeLines = {
    transformation: 'What these cards are collectively describing is a process of genuine becoming — the uncomfortable, necessary shedding of something that no longer serves the person you are in the process of being.',
    power:          'A strong thread of agency runs through this spread. The cards are not asking whether you have the capacity — they are asking whether you are willing to use it, and in which direction.',
    inner:          'The dominant current of this reading moves inward. What is happening inside you — in the quiet, in the half-acknowledged, in the not-yet-named — is the actual subject of these cards.',
    heart:          'Connection is the central thread here: to other people, to the creative life, to the deeper currents of feeling that give everything else its meaning.',
    challenge:      'These cards do not look away from difficulty. Something in your situation is genuinely demanding, and this spread is not asking you to reframe it into positivity. It is asking you to meet it with clear eyes.',
    clarity:        'A clarifying current runs through this reading — light breaking through, truth becoming visible, things coming into focus that were previously obscured or deliberately avoided.',
    cycle:          'You are standing at a significant hinge between one phase and the next. This is always the most disorienting place to be, because you are neither fully where you were nor yet where you are going.'
  };

  var closings = [
    'What the oracle sees here is not a verdict but an invitation. The question is only what you choose to do with what you have been shown.',
    'These cards do not tell you what will happen. They illuminate what is already in motion, in the hope that seeing it clearly gives you more room to move.',
    'The spread points toward something that has already begun. Trust what is already moving in you, even if you cannot yet give it a name.',
    'What is being asked of you is not certainty or perfection but presence — the willingness to show up fully for whatever this moment actually contains.'
  ];
  var closing = closings[(names[0].length + n) % closings.length];

  return frame + ' ' + (themeLines[dominantTheme] || themeLines.transformation) + reversedNote + ' ' + closing;
};
