"use client";

import "./index.css";

import Button from "@/ui/kits/Button";
import { FC } from "react";
import { ITicketDetailDialogProps } from "./index.type";
import TicketCard from "../TicketCard";
import { downloadTicketAttachmentsApi } from "@/services/tickets";

const TicketDetailDialog: FC<ITicketDetailDialogProps> = ({
	handleCloseDetail,
	handleOpenDetail,
	ticket,
}) => {
	const handleDownloadAttchments = () => {
		downloadTicketAttachmentsApi(ticket.id)
			.then((data) => {
				const buffer = Buffer.from(data);
				const blob = new Blob([buffer]);
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement("a");
				document.body.appendChild(a);
				a.style.display = "none";
				a.href = url;
				a.download = "download.zip";
				a.click();
				window.URL.revokeObjectURL(url);
				a.remove();
			})
			.catch((err) => {
				console.log("error heppen", err);
			});
	};

	return (
		<div className="ticket-detail">
			<div className="ticket-detail__card">
				<h1 className="ticket-detail__title">{ticket.title}</h1>
				<div className="ticket-detail__content">
					<p className="ticket-detail__text">{ticket.content}</p>
					{ticket.answer && (
						<div className="admin-card">
							<h1 className="admin-card__title">پاسخ ادمین : </h1>
							<p className="admin-card__text">{ticket.answer}</p>
						</div>
					)}
					{ticket.childrens.length > 0 && (
						<div className="related-ticket">
							<h1 className="related-ticket__title">
								پیام های ایجاد شده در این تیکت
							</h1>
							<ul className="related-ticket__list">
								{ticket.childrens.map((ticket) => (
									<TicketCard
										handleOpenDetail={handleOpenDetail.bind(null, ticket)}
										ticket={ticket}
										key={ticket.id}
									/>
								))}
							</ul>
						</div>
					)}
				</div>
				{ticket.attachments.length > 0 ? (
					<div className="ticket-detail__action">
						<div className="col-span-6">
							<Button
								variant="secondary"
								size="sm"
								className="w-full"
								isOutline
								onClick={handleDownloadAttchments}
							>
								دانلود فایل پیوست
							</Button>
						</div>
						<div className="col-span-6">
							<Button
								onClick={handleCloseDetail}
								variant="error"
								size="sm"
								className="w-full"
							>
								بستن جزئیات
							</Button>
						</div>
					</div>
				) : (
					<div className="ticket-detail__action">
						<div className="col-span-12">
							<Button
								onClick={handleCloseDetail}
								variant="error"
								size="sm"
								className="w-full"
							>
								بستن جزئیات
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TicketDetailDialog;
