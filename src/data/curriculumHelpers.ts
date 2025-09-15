import { mathCurriculum, Grade, Topic } from "./mathCurriculum";

export function getRandomSubtopic(
  gradeId: string
): { grade: Grade; topic: Topic; subtopic: string } | null {
  const grade = mathCurriculum[gradeId];
  if (!grade) return null;

  // random topic
  const topic = grade.topics[Math.floor(Math.random() * grade.topics.length)];

  // random subtopic
  if (!topic.subtopics.length) return null;
  const subtopic = topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return { grade, topic, subtopic };
}
