import { reactive, ref } from "vue";
import emailjs from "@emailjs/browser";
import type { mail } from "../type";

const publicKey: string = "qN4yjPajQ-NosbmdK";
const serviceId: string = "service_631aoi2";
const templeteId: string = "template_jlcfuca";

emailjs.init(publicKey);

export const form = reactive<mail>({ name: "", email: "", description: "" });

// สถานะต่างๆ
export const sending = ref<boolean>(false);
export const statusMessage = ref<string>("");
export const statusClass = ref<string>("");

export const sendMail = () => {
  sending.value = true;
  statusMessage.value = "";

  const templete = {
    name: form.name,
    email: form.email,
    description: form.description,
    heading: "ข้อความจาก Website PortForio ถูกส่งมาหาคุณ",
    time: new Date().toLocaleString("th-TH", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  emailjs
    .send(serviceId, templeteId, templete)
    .then((): void => {
      statusMessage.value = "ส่ง Form สำเร็จ | Success";
      statusClass.value = "success";
      form.name = "";
      form.email = "";
      form.description = "";
    })
    .catch((err): void => {
      statusMessage.value = `เกิดข้อผิดพลาด | Error: ${err}`;
      statusClass.value = "error";
    })
    .finally((): void => {
      sending.value = false;
    });
};
